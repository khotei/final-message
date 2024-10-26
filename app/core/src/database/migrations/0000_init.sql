CREATE TYPE "public"."role" AS ENUM('hr', 'candidate');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"email" varchar,
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"role" "role",
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
