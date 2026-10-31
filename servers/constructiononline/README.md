# ConstructionOnline MCP by usefulapi

Remote MCP endpoint: https://constructiononline.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://constructiononline.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http constructiononline https://constructiononline.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=constructiononline&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fconstructiononline.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "constructiononline": {
      "url": "https://constructiononline.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ConstructionOnline credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/constructiononline/

<!-- connect:end (generated above, edit below) -->

Connect with your ConstructionOnline credentials using the hosted authorization flow.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `constructiononline_get_contact` | read | Get contact |
| `constructiononline_get_contact_by_email` | read | Get contact by email |
| `constructiononline_get_contact_by_phone` | read | Get contact by phone |
| `constructiononline_get_project` | read | Get project |
| `constructiononline_get_opportunity` | read | Get opportunity |
| `constructiononline_get_schedule` | read | Get schedule |
| `constructiononline_usage_status` | meta | Usage status (free-tier meter) |
| `constructiononline_request_feature` | meta | Request a missing feature |
| `constructiononline_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `constructiononline_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per login email and company API key) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `constructiononline_upgrade` (it returns a Stripe Checkout link). Cancel any time with `constructiononline_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `constructiononline_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

See the repository license.
