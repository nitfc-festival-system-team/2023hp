export const ScheduleMoveButton = ({
  setState,
  state,
  buttonText,
}: {
  setState: (state: number) => void;
  state: number;
  buttonText?: string;
}) => {
  return <button onClick={() => setState(state)}>{buttonText}</button>;
};
