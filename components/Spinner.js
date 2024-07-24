import { BounceLoader } from "react-spinners";

export default function Spinner ({fullWidth}) {
  return (
    <div fullWidth={fullWidth}>
      <BounceLoader speedMultiplier={3} color={'#000'} />
    </div>
  )
}