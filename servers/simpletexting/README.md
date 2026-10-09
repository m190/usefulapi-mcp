# SimpleTexting MCP by usefulapi

Manage [SimpleTexting](https://simpletexting.com) from Claude, Cursor, or any MCP client — send SMS/MMS, manage contacts, and read campaigns, messages and media. Hosted, no local install: connect with your SimpleTexting API token.

**Live endpoint:** `https://simpletexting.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://simpletexting.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http simpletexting https://simpletexting.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=simpletexting&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsimpletexting.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "simpletexting": {
      "url": "https://simpletexting.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your SimpleTexting credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/simpletexting/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **SimpleTexting API token** (SimpleTexting → Settings → API).
It's validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `simpletexting_list_contacts` | read | List contacts |
| `simpletexting_get_contact` | read | Get contact |
| `simpletexting_list_campaigns` | read | List campaigns |
| `simpletexting_get_campaign` | read | Get campaign |
| `simpletexting_list_messages` | read | List messages |
| `simpletexting_get_message` | read | Get message |
| `simpletexting_list_media` | read | List media |
| `simpletexting_get_media` | read | Get media |
| `simpletexting_evaluate_message` | read | Evaluate message |
| `simpletexting_send_message` | **write** | Send message |
| `simpletexting_update_contact` | **write** | Update contact |
| `simpletexting_usage_status` | meta | Usage status (free-tier meter) |
| `simpletexting_request_feature` | meta | Request a missing feature |
| `simpletexting_upgrade` | meta | Upgrade to Pro (unlimited) |
| `simpletexting_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `simpletexting_upgrade` (it returns a Stripe Checkout link). Cancel any time with `simpletexting_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `simpletexting_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
