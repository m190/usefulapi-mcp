# Axis LMS MCP by usefulapi

Read Axis LMS users, courses, learning paths, certifications and reports; manage enrollments.

**Live endpoint:** `https://axis-lms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/axis-lms

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://axis-lms.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http axis-lms https://axis-lms.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=axis-lms&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Faxis-lms.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "axis-lms": {
      "url": "https://axis-lms.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Axis LMS credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/axis-lms/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter the **web address of your Axis LMS** (https) and an **Axis REST API key** (System > Integrations > Axis REST API > Manage API Keys; the Axis REST API must be enabled for your system).
Your credentials are validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `axislms_list_users` | read | List users |
| `axislms_get_user` | read | Get user |
| `axislms_search_users` | read | Search users |
| `axislms_count_users` | read | Count users |
| `axislms_list_courses` | read | List courses |
| `axislms_count_courses` | read | Count courses |
| `axislms_get_course` | read | Get course |
| `axislms_list_course_users` | read | List users in a course |
| `axislms_list_usergroups` | read | List usergroups |
| `axislms_get_usergroup` | read | Get usergroup |
| `axislms_list_usergroup_members` | read | List usergroup members |
| `axislms_list_learningpaths` | read | List learning paths |
| `axislms_list_learningpath_users` | read | List users in a learning path |
| `axislms_list_certifications` | read | List certification programs |
| `axislms_get_certification` | read | Get certification program |
| `axislms_list_certification_users` | read | List certified users |
| `axislms_list_user_certificates` | read | List a user's certifications |
| `axislms_list_user_ceus` | read | List a user's CEU credits |
| `axislms_list_ilt_programs` | read | List ILT programs |
| `axislms_get_ilt_program` | read | Get ILT program |
| `axislms_list_ilt_sessions` | read | List ILT sessions |
| `axislms_list_ilt_meetings` | read | List ILT meetings |
| `axislms_list_ilt_completions` | read | List ILT completions |
| `axislms_list_user_ilt_sessions` | read | List a user's ILT sessions |
| `axislms_list_organizations` | read | List organizations |
| `axislms_list_organization_branches` | read | List organization branches |
| `axislms_list_organization_users` | read | List organization users |
| `axislms_course_report` | read | Course report |
| `axislms_certification_report` | read | Certification report |
| `axislms_learningpath_report` | read | Learning path report |
| `axislms_ilt_report` | read | ILT report |
| `axislms_user_report` | read | User transcript report |
| `axislms_enroll_user_in_course` | **write** | Enroll a user in a course |
| `axislms_unenroll_user_from_course` | **write** | Remove a user from a course |
| `axislms_enroll_user_in_learningpath` | **write** | Enroll a user in a learning path |
| `axislms_unenroll_user_from_learningpath` | **write** | Remove a user from a learning path |
| `axislms_enroll_user_in_ilt_session` | **write** | Enroll a user in an ILT session |
| `axislms_unenroll_user_from_ilt_session` | **write** | Remove a user from an ILT session |
| `axislms_mark_ilt_attendance` | **write** | Mark ILT attendance |
| `axislms_create_user` | **write** | Create a user |
| `axislms_update_user` | **write** | Update a user |
| `axislms_create_usergroup` | **write** | Create a usergroup |
| `axislms_add_usergroup_member` | **write** | Add a user to a usergroup |
| `axislms_remove_usergroup_member` | **write** | Remove a user from a usergroup |
| `axislms_usage_status` | meta | Usage status (free-tier meter) |
| `axislms_request_feature` | meta | Request a missing feature |
| `axislms_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `axislms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per LMS) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `axislms_upgrade` (it returns a Stripe Checkout link). Cancel any time with `axislms_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `axislms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
