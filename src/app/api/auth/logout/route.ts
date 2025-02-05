import db from "@/db/db";
import { z } from "zod";

const LogoutRequest = user_id: z.string()
