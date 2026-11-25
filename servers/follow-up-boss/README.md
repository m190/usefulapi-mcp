# Follow Up Boss MCP by usefulapi

Use [Follow Up Boss](https://www.followupboss.com) from Claude, Cursor, or any MCP client — search people and leads, review calls, texts, tasks, appointments and deals, and add notes, tasks and updates.
Hosted, no local install: connect with your own Follow Up Boss credentials.

**Live endpoint:** `https://follow-up-boss.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/follow-up-boss

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://follow-up-boss.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http follow-up-boss https://follow-up-boss.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=follow-up-boss&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Ffollow-up-boss.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "follow-up-boss": {
      "url": "https://follow-up-boss.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Follow Up Boss credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/follow-up-boss/

<!-- connect:end (generated above, edit below) -->

On first connect you'll provide your **Follow Up Boss API key** (Admin → API), which has exactly the permissions of the user it belongs to.
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `fub_get_identity` | read | Get identity |
| `fub_search_people` | read | Search people (contacts/leads) |
| `fub_get_person` | read | Get one person |
| `fub_check_duplicate_person` | read | Check whether a person exists |
| `fub_list_events` | read | List lead events |
| `fub_list_calls` | read | List calls |
| `fub_list_text_messages` | read | List text messages |
| `fub_list_tasks` | read | List tasks |
| `fub_list_appointments` | read | List appointments |
| `fub_list_deals` | read | List deals |
| `fub_list_pipelines` | read | List deal pipelines |
| `fub_list_stages` | read | List contact stages |
| `fub_list_users` | read | List users (agents) |
| `fub_list_custom_fields` | read | List custom fields |
| `fub_list_action_plans` | read | List action plans |
| `fub_list_person_action_plans` | read | List action plans applied to people |
| `fub_lead_source_report` | read | Lead source report by agent |
| `fub_send_lead_event` | **write** | Send in a lead / lead event |
| `fub_update_person` | **write** | Update a person |
| `fub_add_note` | **write** | Add a note |
| `fub_log_call` | **write** | Log a call |
| `fub_create_task` | **write** | Create a task |
| `fub_update_task` | **write** | Update a task |
| `fub_create_deal` | **write** | Create a deal |
| `fub_update_deal` | **write** | Update a deal |
| `fub_get_note` | read | Get one note |
| `fub_get_task` | read | Get one task |
| `fub_get_deal` | read | Get one deal |
| `fub_get_appointment` | read | Get one appointment |
| `fub_list_appointment_types` | read | List appointment types |
| `fub_list_appointment_outcomes` | read | List appointment outcomes |
| `fub_list_smart_lists` | read | List Smart Lists |
| `fub_get_smart_list` | read | Get one Smart List |
| `fub_list_ponds` | read | List ponds |
| `fub_list_teams` | read | List teams |
| `fub_list_groups` | read | List lead routing groups |
| `fub_list_timeframes` | read | List timeframes |
| `fub_list_deal_custom_fields` | read | List deal custom fields |
| `fub_list_email_templates` | read | List email templates |
| `fub_list_text_templates` | read | List text templates |
| `fub_merge_email_template` | read | Fill an email template for a contact |
| `fub_merge_text_template` | read | Fill a text template for a contact |
| `fub_list_relationships` | read | List contact relationships |
| `fub_list_unclaimed_leads` | read | List leads I can claim |
| `fub_daily_brief` | read | My daily brief |
| `fub_team_follow_up_report` | read | Team follow-up report |
| `fub_create_person` | **write** | Add a contact |
| `fub_claim_lead` | **write** | Claim a lead |
| `fub_create_appointment` | **write** | Create an appointment |
| `fub_update_appointment` | **write** | Update an appointment |
| `fub_delete_appointment` | **write** | Delete an appointment |
| `fub_update_note` | **write** | Edit a note |
| `fub_delete_note` | **write** | Delete a note |
| `fub_delete_task` | **write** | Delete a task |
| `fub_delete_deal` | **write** | Delete a deal |
| `fub_create_relationship` | **write** | Add a relationship |
| `fub_update_relationship` | **write** | Update a relationship |
| `fub_apply_action_plan` | **write** | Start an action plan for a contact |
| `fub_set_action_plan_status` | **write** | Pause or resume an action plan |
| `fub_bulk_update_people` | **write** | Update many contacts |
| `fub_usage_status` | meta | Usage status (free-tier meter) |
| `fub_request_feature` | meta | Request a missing feature |
| `fub_upgrade` | meta | Upgrade to Pro or Pro+ |
| `fub_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `fub_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `fub_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `fub_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Follow Up Boss.
