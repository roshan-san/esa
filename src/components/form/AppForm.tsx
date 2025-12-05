import { createFormHook } from "@tanstack/react-form";
import { fieldContext, formContext } from "./form-context";
import TextInput from "./fields/TextInput";
import SubmitButton from "./Submit";


export const { useAppForm, withForm, withFieldGroup } = createFormHook({
  fieldContext: fieldContext,
  formContext: formContext,
  fieldComponents: {
    TextInput: TextInput,
  },
  formComponents: {
    SubmitButton: SubmitButton,
  },
});