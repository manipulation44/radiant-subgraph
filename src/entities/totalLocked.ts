import { TotalLocked } from "../../generated/schema";

export function loadTotalLocked(isLP: string): TotalLocked {
  let totalLocked = TotalLocked.load(isLP);

  if (!totalLocked) {
    totalLocked = new TotalLocked(isLP);

    totalLocked.save();
  }

  return totalLocked as TotalLocked;
}
