# ComplyCube MCP by usefulapi

Use your [ComplyCube](https://www.complycube.com) account from Claude, Cursor, or any MCP client. It lists and creates clients, runs AML screening checks and reads check results. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://complycube.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://complycube.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http complycube https://complycube.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=complycube&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcomplycube.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "complycube": {
      "url": "https://complycube.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your ComplyCube credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/complycube/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **ComplyCube API key** (a `test_` or `live_` key from Developers → API keys in the ComplyCube portal). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `complycube_list_clients` | read | List clients |
| `complycube_get_client` | read | Get a client |
| `complycube_create_client` | **write** | Create a client |
| `complycube_list_checks` | read | List checks |
| `complycube_get_check` | read | Get a check |
| `complycube_create_aml_check` | **write** | Run an AML screening check |
| `complycube_usage_status` | meta | Usage status (free-tier meter) |
| `complycube_request_feature` | meta | Request a missing feature |
| `complycube_upgrade` | meta | Upgrade to Pro or Pro+ |
| `complycube_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `complycube_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `complycube_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `complycube_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
