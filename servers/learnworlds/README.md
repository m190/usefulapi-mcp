# LearnWorlds MCP by usefulapi

Use [LearnWorlds](https://www.learnworlds.com) from Claude, Cursor, or any MCP client — review courses, learner progress, grades, payments and certificates, and create, tag or enroll learners.
Hosted, no local install: connect with your own LearnWorlds credentials.

**Live endpoint:** `https://learnworlds.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/learnworlds

## Add to Claude

```json
{
  "mcpServers": {
    "learnworlds": {
      "url": "https://learnworlds.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **school URL**, **API Client ID** and **access token** (Settings > Developers > API).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `learnworlds_list_courses` | read | List courses |
| `learnworlds_get_course` | read | Get a course |
| `learnworlds_get_course_contents` | read | Get course contents |
| `learnworlds_get_course_analytics` | read | Get course analytics |
| `learnworlds_list_course_users` | read | List users enrolled in a course |
| `learnworlds_get_course_grades` | read | Get course grades |
| `learnworlds_list_users` | read | List users |
| `learnworlds_get_user` | read | Get a user |
| `learnworlds_list_user_courses` | read | List a user's course enrollments |
| `learnworlds_get_user_course_progress` | read | Get a user's progress in a course |
| `learnworlds_list_payments` | read | List payments |
| `learnworlds_get_payment` | read | Get a payment |
| `learnworlds_list_certificates` | read | List certificates |
| `learnworlds_list_user_groups` | read | List user groups |
| `learnworlds_list_event_logs` | read | List event logs |
| `learnworlds_create_user` | **write** | Create a user |
| `learnworlds_update_user` | **write** | Update a user |
| `learnworlds_update_user_tags` | **write** | Attach or detach user tags |
| `learnworlds_enroll_user` | **write** | Enroll a user in a product |
| `learnworlds_add_user_to_group` | **write** | Add a user to a user group |
| `learnworlds_usage_status` | meta | Usage status (free-tier meter) |
| `learnworlds_upgrade` | meta | Upgrade to Pro (unlimited) |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT © usefulapi. Not affiliated with or endorsed by LearnWorlds.
