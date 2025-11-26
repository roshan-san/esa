import { pgTable, timestamp, text } from 'drizzle-orm/pg-core';
import { user } from './auth.schema';

export const profileTable = pgTable('profiles', {
  id: text('id')
    .notNull()
    .primaryKey()
    .references(() => user.id, { onDelete: 'cascade' }),
  username: text('username').notNull(),
  full_name: text('full_name').notNull(),
  email: text('email').notNull(),

  avatar_url: text('avatar_url'),

  // Location fields
  city: text('city'),
  state: text('state'),
  country: text('country'),

  // Work preferences & availability
  user_type: text("user_type"),
  preferred_work_type: text("preferred_work_type"),
  preferred_domain: text('preferred_domain'),
  experience_level: text('experience_level'),


  bio: text('bio'),

  kyc_status: text('kyc_status').default('pending'),
  created_at: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updated_at: timestamp("updated_at", { withTimezone: true }).defaultNow(),
});