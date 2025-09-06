import React, { useState, useEffect } from "react";
import Button from "./Button";
import ContainerLogo from "./ContainerLogo";
import { useForm, ValidationError } from "@formspree/react";
import CustomAlert from "./CustomAlert";
import { Alert, AlertType } from "../data/alert";

export interface ContactFormProps {
  className?: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export function ContactForm({ className = "" }: ContactFormProps) {
  const [state, handleSubmit] = useForm("movlqyyl");
  const [alert, setAlert] = useState<Alert | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const showAlert = (
    (message: string, variant: AlertType) => {
      setAlert({ message, variant });

      const activeElement = document.activeElement as HTMLElement;
      if (activeElement && activeElement.blur) {
        activeElement.blur();
      }
      
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      showAlert("Wysłano!", AlertType.SUCCESS);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } else if (state.errors){
      showAlert("Błąd!", AlertType.ERROR);
    }
  }, [state.succeeded, state.errors]);

  return (
    <form
      className={`contact-form flex-column width-60 relative ${className}`}
      onSubmit={handleFormSubmit}
    >
      <ContainerLogo />
      <div className="form-row flex">
        <div className="form-group flex-column width-90">
          <label className="form-label m-0">Imię</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Imię"
            className="form-input p-0"
            required
          />
          <ValidationError
            prefix="Imię"
            field="firstName"
            errors={state.errors}
          />
        </div>
        <div className="form-group flex-column width-90">
          <label className="form-label m-0">Nazwisko</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Nazwisko"
            className="form-input p-0"
            required
          />
          <ValidationError
            prefix="Nazwisko"
            field="lastName"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="form-group flex-column width-max">
        <label className="form-label m-0">Adres e-mail</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="przykład@email.com"
          className="form-input p-0 width-max"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-group flex-column width-max">
        <label className="form-label m-0">Treść wiadomości</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Opisz swoją sprawę lub zadaj pytanie..."
          className="form-textarea p-0 width-max"
          rows={5}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <div className="flex justify-center">
        <Button text="Wyślij"  disableImage={true} onClick={() => {}} type="submit" />
      </div>
      {alert && <CustomAlert message={alert.message} variant={alert.variant} />}
    </form>

  );
}

export default ContactForm;
