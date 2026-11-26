# Groq MCP by usefulapi

Use your [Groq](https://groq.com) account from Claude, Cursor, or any MCP client. Run chat completions, manage batch jobs and files, and read the models the account can use. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://groq.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://groq.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http groq https://groq.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=groq&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fgroq.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "groq": {
      "url": "https://groq.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Groq credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/groq/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Groq API key** (console.groq.com → API Keys, starting with gsk_).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `groq_list_models` | read | List models |
| `groq_list_batches` | read | List batches |
| `groq_get_batch` | read | Get a batch |
| `groq_list_files` | read | List files |
| `groq_get_file` | read | Get a file |
| `groq_get_file_content` | read | Get file content |
| `groq_create_chat_completion` | **write** | Create a chat completion |
| `groq_create_batch` | **write** | Create a batch |
| `groq_cancel_batch` | **write** | Cancel a batch |
| `groq_delete_file` | **write** | Delete a file |
| `groq_usage_status` | meta | Usage status (free-tier meter) |
| `groq_request_feature` | meta | Request a missing feature |
| `groq_upgrade` | meta | Upgrade to Pro or Pro+ |
| `groq_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `groq_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `groq_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `groq_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
