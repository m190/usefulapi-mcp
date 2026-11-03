# Cerebras MCP by usefulapi

Use your [Cerebras](https://www.cerebras.ai) account from Claude, Cursor, or any MCP client. List the models on your account, read model details, and send chat messages to a model. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cerebras.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cerebras.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cerebras https://cerebras.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cerebras&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcerebras.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cerebras": {
      "url": "https://cerebras.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cerebras credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cerebras/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Cerebras API key**, which you create under API Keys in the Cerebras Cloud Console. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cerebras_list_models` | read | List models |
| `cerebras_get_model` | read | Get a model |
| `cerebras_chat_completion` | read | Chat completion |
| `cerebras_usage_status` | meta | Usage status (free-tier meter) |
| `cerebras_request_feature` | meta | Request a missing feature |
| `cerebras_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cerebras_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `cerebras_upgrade` (it returns a Stripe Checkout link). Cancel any time with `cerebras_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `cerebras_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
