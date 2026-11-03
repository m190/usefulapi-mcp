# Botpress MCP by usefulapi

Use your [Botpress](https://botpress.com) account from Claude, Cursor, or any MCP client. Read workspaces, bots, logs, analytics, conversations, messages, tables and files. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://botpress.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://botpress.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http botpress https://botpress.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=botpress&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbotpress.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "botpress": {
      "url": "https://botpress.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Botpress credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/botpress/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Personal Access Token** (Botpress → Profile settings → Personal Access Tokens) and your **workspace id**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `botpress_get_account` | read | Get account |
| `botpress_list_workspaces` | read | List workspaces |
| `botpress_list_workspace_members` | read | List workspace members |
| `botpress_list_bots` | read | List bots |
| `botpress_get_bot` | read | Get bot |
| `botpress_get_bot_logs` | read | Get bot logs |
| `botpress_get_bot_analytics` | read | Get bot analytics |
| `botpress_list_bot_issues` | read | List bot issues |
| `botpress_list_conversations` | read | List conversations |
| `botpress_get_conversation` | read | Get conversation |
| `botpress_list_messages` | read | List messages |
| `botpress_list_users` | read | List users |
| `botpress_get_user` | read | Get user |
| `botpress_list_tables` | read | List tables |
| `botpress_get_table` | read | Get table |
| `botpress_find_table_rows` | read | Find table rows |
| `botpress_list_files` | read | List files |
| `botpress_get_file` | read | Get file |
| `botpress_search_files` | read | Search files |
| `botpress_usage_status` | meta | Usage status (free-tier meter) |
| `botpress_request_feature` | meta | Request a missing feature |
| `botpress_upgrade` | meta | Upgrade to Pro or Pro+ |
| `botpress_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `botpress_upgrade` (it returns a Stripe Checkout link). Cancel any time with `botpress_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `botpress_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
