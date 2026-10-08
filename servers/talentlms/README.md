# TalentLMS MCP by usefulapi

Use [TalentLMS](https://www.talentlms.com) from Claude, Cursor, or any MCP client — read TalentLMS users, courses, groups, branches and progress; create learners and enroll users.
Hosted, no local install: connect with your own TalentLMS credentials.

**Live endpoint:** `https://talentlms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/talentlms

## Add to Claude

```json
{
  "mcpServers": {
    "talentlms": {
      "url": "https://talentlms.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **TalentLMS portal subdomain and API key**.
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `get_portal_statistics` | read | Get portal statistics |
| `get_timeline` | read | Get timeline |
| `list_users` | read | List users |
| `get_user` | read | Get a user |
| `list_user_courses` | read | List a user's courses |
| `list_user_groups` | read | List a user's groups |
| `list_user_branches` | read | List a user's branches |
| `list_user_certificates` | read | List a user's certificates |
| `get_course_progress` | read | Get a user's progress in a course |
| `list_courses` | read | List courses |
| `get_course` | read | Get a course |
| `list_course_users` | read | List a course's users |
| `list_categories` | read | List course categories |
| `list_learning_paths` | read | List learning paths |
| `list_groups` | read | List groups |
| `get_group` | read | Get a group |
| `list_group_users` | read | List a group's users |
| `list_branches` | read | List branches |
| `get_branch` | read | Get a branch |
| `list_branch_users` | read | List a branch's users |
| `create_user` | **write** | Create a learner |
| `enroll_user_in_course` | **write** | Enroll a user in a course |
| `add_user_to_group` | **write** | Add a user to a group |
| `talentlms_usage_status` | meta | Usage status (free-tier meter) |
| `talentlms_upgrade` | meta | Upgrade to Pro (unlimited) |
| `talentlms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per portal) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `talentlms_upgrade` (it returns a Stripe Checkout link). Cancel any time with `talentlms_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `talentlms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by TalentLMS.
