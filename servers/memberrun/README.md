# MemberRun MCP by usefulapi

Use your [MemberRun](https://www.memberrun.com) account from Claude, Cursor, or any MCP client. Read and change members and events, and read registrations, invoices, resources and chapters. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://memberrun.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://memberrun.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http memberrun https://memberrun.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=memberrun&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmemberrun.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "memberrun": {
      "url": "https://memberrun.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MemberRun credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/memberrun/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **MemberRun API key** (an association admin creates it under **Admin → Integrations**; it starts with **mk_live_**). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `memberrun_get_account` | read | Get the API key and association |
| `memberrun_list_members` | read | List members |
| `memberrun_get_member` | read | Get a member |
| `memberrun_list_events` | read | List events |
| `memberrun_get_event` | read | Get an event |
| `memberrun_list_event_registrations` | read | List event registrations |
| `memberrun_get_event_registration` | read | Get an event registration |
| `memberrun_list_invoices` | read | List invoices |
| `memberrun_get_invoice` | read | Get an invoice |
| `memberrun_list_resources` | read | List resources |
| `memberrun_get_resource` | read | Get a resource |
| `memberrun_list_chapters` | read | List chapters |
| `memberrun_get_chapter` | read | Get a chapter |
| `memberrun_create_member` | **write** | Create a member |
| `memberrun_update_member` | **write** | Update a member |
| `memberrun_suspend_member` | **write** | Suspend a member |
| `memberrun_create_event` | **write** | Create an event |
| `memberrun_update_event` | **write** | Update an event |
| `memberrun_cancel_event` | **write** | Cancel an event |
| `memberrun_register_member_for_event` | **write** | Register a member for an event |
| `memberrun_cancel_event_registration` | **write** | Cancel an event registration |
| `memberrun_usage_status` | meta | Usage status (free-tier meter) |
| `memberrun_request_feature` | meta | Request a missing feature |
| `memberrun_upgrade` | meta | Upgrade to Pro or Pro+ |
| `memberrun_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `memberrun_upgrade` (it returns a Stripe Checkout link). Cancel any time with `memberrun_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `memberrun_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
