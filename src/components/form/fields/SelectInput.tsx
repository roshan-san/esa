import { Field } from "~/components/ui/field";
import { Select ,SelectContent, SelectTrigger, SelectItem} from "~/components/ui/select";

export function SelectInput({list}:{list:string[]}){
    return (
        <Field>
            <Select>
                <SelectTrigger>
                    Hello click me 
                </SelectTrigger>
                <SelectContent>
                    {list.map((no)=>(
                        <SelectItem key={no} value={no}/>
                    ))}
                </SelectContent>
                
            </Select>
        </Field>
    )
}