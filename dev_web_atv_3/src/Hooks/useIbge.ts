import { useContext } from "react";
import { ctx } from "../contexts/Contextibge";


export default function useIbge() {
    return useContext(ctx);
  }