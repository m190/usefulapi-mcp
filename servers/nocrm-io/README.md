# noCRM.io MCP by usefulapi

Read noCRM.io leads, pipeline steps, comments and client folders; create, update and assign leads.

**Live endpoint:** `https://nocrm-io.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/nocrm-io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nocrm-io.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nocrm-io https://nocrm-io.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nocrm-io&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnocrm-io.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nocrm-io": {
      "url": "https://nocrm-io.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your noCRM.io credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nocrm-io/

<!-- connect:end (generated above, edit below) -->

On first connect you'll enter your noCRM.io **account name** (acme for acme.nocrm.io) and an **API key** (admin section).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nocrm_list_leads` | read | List leads |
| `nocrm_list_unassigned_leads` | read | List unassigned leads |
| `nocrm_get_lead` | read | Get lead |
| `nocrm_list_lead_comments` | read | List lead comments |
| `nocrm_list_lead_history` | read | List lead history |
| `nocrm_get_lead_duplicates` | read | Find duplicate leads |
| `nocrm_list_lead_attachments` | read | List lead attachments |
| `nocrm_list_follow_ups` | read | List post-sales follow-ups |
| `nocrm_list_pipelines` | read | List pipelines |
| `nocrm_list_steps` | read | List pipeline steps |
| `nocrm_list_users` | read | List users |
| `nocrm_get_user` | read | Get user |
| `nocrm_list_teams` | read | List teams |
| `nocrm_list_client_folders` | read | List client folders |
| `nocrm_get_client_folder` | read | Get client folder |
| `nocrm_list_activities` | read | List activity types |
| `nocrm_list_predefined_tags` | read | List predefined tags |
| `nocrm_list_fields` | read | List custom fields |
| `nocrm_create_lead` | **write** | Create lead |
| `nocrm_update_lead` | **write** | Update lead |
| `nocrm_assign_lead` | **write** | Assign lead |
| `nocrm_add_lead_comment` | **write** | Add lead comment |
| `nocrm_create_client_folder` | **write** | Create client folder |
| `nocrm_add_lead_to_client_folder` | **write** | Add lead to client folder |
| `nocrm_usage_status` | meta | Usage status (free-tier meter) |
| `nocrm_request_feature` | meta | Request a missing feature |
| `nocrm_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `nocrm_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `nocrm_upgrade` (it returns a Stripe Checkout link). Cancel any time with `nocrm_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `nocrm_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by noCRM.io.
