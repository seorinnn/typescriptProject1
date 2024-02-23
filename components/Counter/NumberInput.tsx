import {Input, InputField, onChange} from '@gluestack-ui/themed';

interface Props {
  inputNumber:number;
  onChangeInputNumber: (inputNumber:number)=>void;
}

export default function NumberInput({inputNumber, onChangeInputNumber}:Props) {
  const handleChangeInputNumber=(nextStr:string)=>{
    const enterdNumber=Number(nextStr);
    if(enterdNumber) {
      onChangeInputNumber(enterdNumber);
    }
  };

  return (
    <Input variant='outline' size='md' width={150}>
            <InputField
              value={`${inputNumber? inputNumber:''}`}
              textAlign='right'
              onChangeText={handleChangeInputNumber}
            />
          </Input>
  )
}