import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CLINIC, SERVICE_OPTIONS, whatsappUrl } from '../../shared/clinic.data';
import { Icon } from '../../shared/icon/icon';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';

type Status = 'idle' | 'sending' | 'success';

/** Valida un teléfono mexicano: 10 dígitos, permitiendo espacios y guiones. */
function phoneValidator(control: AbstractControl): ValidationErrors | null {
  const value = String(control.value ?? '').replace(/\D/g, '');
  if (!value) {
    return null;
  }
  return value.length === 10 ? null : { phone: true };
}

@Component({
  selector: 'app-appointment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, Icon, RevealOnScroll],
  templateUrl: './appointment.html',
  styleUrl: './appointment.scss',
})
export class Appointment {
  readonly clinic = CLINIC;
  readonly serviceOptions = SERVICE_OPTIONS;
  readonly today = new Date().toISOString().split('T')[0];

  private readonly fb = inject(FormBuilder);

  readonly status = signal<Status>('idle');
  readonly submittedName = signal('');

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, phoneValidator]],
    email: ['', [Validators.required, Validators.email]],
    service: ['', [Validators.required]],
    date: ['', [Validators.required]],
    message: ['', [Validators.maxLength(500)]],
    consent: [false, [Validators.requiredTrue]],
  });

  readonly whatsappLink = whatsappUrl(
    `Hola, me gustaría agendar una cita en ${CLINIC.name}.`,
  );

  /** Muestra el error solo cuando el campo fue tocado o el envío se intentó. */
  readonly showErrors = signal(false);

  readonly messageLength = computed(() => this.form.controls.message.value.length);

  invalid(name: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[name];
    return control.invalid && (control.touched || this.showErrors());
  }

  submit(): void {
    if (this.status() === 'sending') {
      return;
    }
    if (this.form.invalid) {
      this.showErrors.set(true);
      this.form.markAllAsTouched();
      this.focusFirstInvalid();
      return;
    }

    this.status.set('sending');
    this.submittedName.set(this.form.controls.name.value.trim().split(' ')[0]);

    // Sin backend: simulamos el envío y mostramos el estado de éxito.
    setTimeout(() => {
      this.status.set('success');
    }, 900);
  }

  reset(): void {
    this.form.reset({ consent: false });
    this.showErrors.set(false);
    this.status.set('idle');
  }

  private focusFirstInvalid(): void {
    queueMicrotask(() => {
      const el = document.querySelector<HTMLElement>(
        '.field--invalid input, .field--invalid select, .field--invalid textarea, .field--invalid [type="checkbox"]',
      );
      el?.focus();
    });
  }
}
