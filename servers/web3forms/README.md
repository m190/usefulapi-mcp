# Web3Forms MCP by usefulapi

Use your [Web3Forms](https://web3forms.com) account from Claude, Cursor, or any MCP client. List forms and read their submissions, and create submissions. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://web3forms.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://web3forms.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http web3forms https://web3forms.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=web3forms&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fweb3forms.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "web3forms": {
      "url": "https://web3forms.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Web3Forms credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/web3forms/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Web3Forms Submissions API key** (Web3Forms → Dashboard → Account → API Keys). Tick Create submissions only if you want the assistant to create them. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `web3forms_list_forms` | read | List forms |
| `web3forms_list_submissions` | read | List submissions |
| `web3forms_get_submission` | read | Get a submission |
| `web3forms_create_submission` | **write** | Create a submission |
| `web3forms_usage_status` | meta | Usage status (free-tier meter) |
| `web3forms_request_feature` | meta | Request a missing feature |
| `web3forms_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `web3forms_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `web3forms_upgrade` (it returns a Stripe Checkout link). Cancel any time with `web3forms_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `web3forms_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
