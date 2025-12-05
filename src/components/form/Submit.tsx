import { Button } from "../ui/button";
import { useFormContext } from "./form-context";

export default function SubmitButton() {
  const form = useFormContext();
  return (
    <form.Subscribe selector={(state) => state.canSubmit}>
      {(canSubmit) => (
        <div>
          <Button
            disabled={!canSubmit}
            type="submit"
            onClick={() => form.handleSubmit({ submitAction: "save" })}
          >
            Save
          </Button>
          <Button
            disabled={!canSubmit}
            type="submit"
            onClick={() => form.handleSubmit({ submitAction: "goback" })}
          >
            Save & Go back
          </Button>
        </div>
      )}
    </form.Subscribe>
  );
}