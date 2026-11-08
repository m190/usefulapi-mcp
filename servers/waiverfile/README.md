# WaiverFile MCP by usefulapi

Read WaiverFile waivers, events, forms and SMS opt-ins; create and update events, invite managers.

**Live endpoint:** `https://waiverfile.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/waiverfile

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://waiverfile.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http waiverfile https://waiverfile.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=waiverfile&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwaiverfile.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "waiverfile": {
      "url": "https://waiverfile.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your WaiverFile credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/waiverfile/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your WaiverFile **API key** and **Site ID** (WaiverFile → Settings → API → API keys; click Show to reveal the key, the Site ID is shown below it).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `waiverfile_get_site` | read | Get site details |
| `waiverfile_list_waiver_forms` | read | List waiver forms |
| `waiverfile_list_events` | read | List events by date range |
| `waiverfile_list_upcoming_events` | read | List upcoming events |
| `waiverfile_list_event_categories` | read | List event categories |
| `waiverfile_get_event_waivers` | read | Get waivers for an event |
| `waiverfile_search_waivers` | read | Search waivers |
| `waiverfile_get_waiver` | read | Get a waiver |
| `waiverfile_find_waivers_by_reference` | read | Find waivers by reference id |
| `waiverfile_list_waivers` | read | List waivers by date range |
| `waiverfile_export_waiver_data` | read | Export waiver data |
| `waiverfile_count_waivers` | read | Count waivers in a date range |
| `waiverfile_list_sms_subscribers` | read | List SMS subscribers |
| `waiverfile_create_event` | **write** | Create an event |
| `waiverfile_update_event` | **write** | Update an event |
| `waiverfile_invite_event_managers` | **write** | Invite event managers |
| `waiverfile_create_event_category` | **write** | Create an event category |
| `waiverfile_usage_status` | meta | Usage status (free-tier meter) |
| `waiverfile_request_feature` | meta | Request a missing feature |
| `waiverfile_upgrade` | meta | Upgrade to Pro or Pro+ |
| `waiverfile_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `waiverfile_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `waiverfile_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `waiverfile_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by WaiverFile.
