# webinar.net MCP by usefulapi

Use your [webinar.net](https://webinar.net) account from Claude, Cursor, or any MCP client. Read webinars, schedules, registrants and attendees, and register or update people. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://webinar-net.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://webinar-net.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http webinar-net https://webinar-net.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=webinar-net&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fwebinar-net.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "webinar-net": {
      "url": "https://webinar-net.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your webinar.net credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/webinar-net/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **API Key** and an **API Secret** (webinar.net → Account Settings → Open API → API Credentials). The account owner creates them. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `webinarnet_list_webinars` | read | List webinars |
| `webinarnet_get_webinar` | read | Get a webinar |
| `webinarnet_get_webinar_summary` | read | Get a webinar summary |
| `webinarnet_list_schedules` | read | List webinar schedules |
| `webinarnet_get_schedule` | read | Get a webinar schedule |
| `webinarnet_get_registration_form_fields` | read | Get registration form fields |
| `webinarnet_list_registrants` | read | List webinar registrants |
| `webinarnet_get_registrant` | read | Get a webinar registrant |
| `webinarnet_list_attendees` | read | List webinar attendees |
| `webinarnet_create_registrant` | **write** | Register a person for a webinar |
| `webinarnet_update_registrant` | **write** | Update a webinar registrant |
| `webinarnet_usage_status` | meta | Usage status (free-tier meter) |
| `webinarnet_request_feature` | meta | Request a missing feature |
| `webinarnet_upgrade` | meta | Upgrade to Pro or Pro+ |
| `webinarnet_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `webinarnet_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `webinarnet_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `webinarnet_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
