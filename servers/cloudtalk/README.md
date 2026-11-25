# CloudTalk MCP by usefulapi

Use your [CloudTalk](https://www.cloudtalk.io) account from Claude, Cursor, or any MCP client. Read call history, contacts, agent groups, numbers and dialer campaigns, and add contacts and tags. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cloudtalk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cloudtalk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cloudtalk https://cloudtalk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cloudtalk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcloudtalk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cloudtalk": {
      "url": "https://cloudtalk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your CloudTalk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cloudtalk/

<!-- connect:end (generated above, edit below) -->

On first connect you provide the **CloudTalk API Access Key ID** and **Secret** (Account → Settings → API Keys; only an Administrator can create them). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cloudtalk_list_calls` | read | List calls |
| `cloudtalk_get_call` | read | Get call details |
| `cloudtalk_list_call_tags` | read | List call tags |
| `cloudtalk_list_call_tags_for_call` | read | List a call's tags |
| `cloudtalk_add_call_tags` | **write** | Add tags to a call |
| `cloudtalk_get_group_statistics` | read | Get real-time group statistics |
| `cloudtalk_list_contacts` | read | List and search contacts |
| `cloudtalk_get_contact` | read | Get a contact |
| `cloudtalk_create_contact` | **write** | Create a contact |
| `cloudtalk_update_contact` | **write** | Update a contact |
| `cloudtalk_add_contact_tags` | **write** | Add tags to a contact |
| `cloudtalk_list_contact_tags` | read | List contact tags |
| `cloudtalk_list_contact_fields` | read | List contact fields |
| `cloudtalk_list_agents` | read | List agents |
| `cloudtalk_list_groups` | read | List groups |
| `cloudtalk_list_numbers` | read | List numbers |
| `cloudtalk_list_blacklist` | read | List blacklist |
| `cloudtalk_list_user_statuses` | read | List user statuses |
| `cloudtalk_get_user_status` | read | Get a user's status |
| `cloudtalk_list_dialer_campaigns` | read | List dialer campaigns |
| `cloudtalk_get_dialer_campaign_statistics` | read | Get campaign statistics |
| `cloudtalk_usage_status` | meta | Usage status (free-tier meter) |
| `cloudtalk_request_feature` | meta | Request a missing feature |
| `cloudtalk_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cloudtalk_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cloudtalk_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cloudtalk_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cloudtalk_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
