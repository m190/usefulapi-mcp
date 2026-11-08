# Formcrafts MCP by usefulapi

Use your [Formcrafts](https://formcrafts.com) account from Claude, Cursor, or any MCP client. Read workspaces, forms, form responses and uploaded files, without changing anything. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://formcrafts.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://formcrafts.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http formcrafts https://formcrafts.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=formcrafts&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fformcrafts.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "formcrafts": {
      "url": "https://formcrafts.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Formcrafts credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/formcrafts/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Formcrafts API key** (Organization → Settings → API Keys). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `formcrafts_list_workspaces` | read | List workspaces |
| `formcrafts_list_forms` | read | List forms |
| `formcrafts_get_form` | read | Get form details |
| `formcrafts_list_form_responses` | read | List form responses |
| `formcrafts_list_files` | read | List uploaded files |
| `formcrafts_get_file_content` | read | Get file content |
| `formcrafts_usage_status` | meta | Usage status (free-tier meter) |
| `formcrafts_request_feature` | meta | Request a missing feature |
| `formcrafts_upgrade` | meta | Upgrade to Pro or Pro+ |
| `formcrafts_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `formcrafts_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `formcrafts_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `formcrafts_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
