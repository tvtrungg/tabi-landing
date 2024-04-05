import { BOOKING_ENDPOINT } from "../endpoint";

export const LIST_BRANCH = `${BOOKING_ENDPOINT}/branches`;
export const BRANCH_BY_ID = `${BOOKING_ENDPOINT}/branches/:id`;
export const LIST_ROOMS_OF_BRANCH = `${BOOKING_ENDPOINT}/branches/:id/rooms`;
