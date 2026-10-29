# MillionVerifier MCP by usefulapi

https://millionverifier.usefulapi.io/mcp

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://millionverifier.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http millionverifier https://millionverifier.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=millionverifier&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmillionverifier.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "millionverifier": {
      "url": "https://millionverifier.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your MillionVerifier credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/millionverifier/

<!-- connect:end (generated above, edit below) -->

Connect your own MillionVerifier credentials through the hosted sign-in page.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `millionverifier_credits` | read | Check MillionVerifier credits |
| `millionverifier_verify_email` | **write** | Verify an email with MillionVerifier |
| `millionverifier_upload_file` | **write** | Start MillionVerifier bulk verification |
| `millionverifier_file_info` | read | Read MillionVerifier bulk file status |
| `millionverifier_usage_status` | meta | Usage status (free-tier meter) |
| `millionverifier_request_feature` | meta | Request a missing feature |
| `millionverifier_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `millionverifier_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `millionverifier_upgrade` (it returns a Stripe Checkout link). Cancel any time with `millionverifier_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `millionverifier_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
