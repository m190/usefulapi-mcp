# PushPress MCP by usefulapi

Use your [PushPress](https://www.pushpress.com) account from Claude, Cursor, or any MCP client. Read members, classes, class types, reservations, check-ins, events, enrollments and plans, and create a customer record. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://pushpress.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://pushpress.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http pushpress https://pushpress.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=pushpress&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpushpress.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "pushpress": {
      "url": "https://pushpress.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your PushPress credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/pushpress/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **PushPress API key** (in your PushPress account under **API keys**) and, only for a key that covers several gyms, the **company ID**. The server validates the key and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `pushpress_get_company` | read | Get company |
| `pushpress_list_customers` | read | List customers |
| `pushpress_get_customer` | read | Get customer |
| `pushpress_create_customer` | **write** | Create customer |
| `pushpress_list_classes` | read | List classes |
| `pushpress_get_class` | read | Get class |
| `pushpress_list_class_types` | read | List class types |
| `pushpress_get_class_type` | read | Get class type |
| `pushpress_list_reservations` | read | List reservations |
| `pushpress_get_reservation` | read | Get reservation |
| `pushpress_count_checkins` | read | Count check-ins |
| `pushpress_list_class_checkins` | read | List class check-ins |
| `pushpress_get_class_checkin` | read | Get class check-in |
| `pushpress_list_events` | read | List events |
| `pushpress_get_event` | read | Get event |
| `pushpress_list_enrollments` | read | List enrollments |
| `pushpress_get_enrollment` | read | Get enrollment |
| `pushpress_get_plan` | read | Get plan |
| `pushpress_usage_status` | meta | Usage status (free-tier meter) |
| `pushpress_request_feature` | meta | Request a missing feature |
| `pushpress_upgrade` | meta | Upgrade to Pro or Pro+ |
| `pushpress_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `pushpress_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `pushpress_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `pushpress_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
