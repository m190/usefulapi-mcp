# Docupilot MCP by usefulapi

Use your [Docupilot](https://www.docupilot.com) account from Claude, Cursor, or any MCP client. Read templates, template schemas, versions, deliveries, folders and merge history. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://docupilot.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://docupilot.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http docupilot https://docupilot.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=docupilot&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fdocupilot.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "docupilot": {
      "url": "https://docupilot.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Docupilot credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/docupilot/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Docupilot API key** and **API secret** (Docupilot → Settings → API Settings), your **workspace ID** (Settings → Workspace details) and your **region**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `docupilot_get_current_user` | read | Get current user |
| `docupilot_list_templates` | read | List templates |
| `docupilot_get_template` | read | Get template |
| `docupilot_get_template_schema` | read | Get template schema |
| `docupilot_list_template_versions` | read | List template versions |
| `docupilot_list_template_deliveries` | read | List template deliveries |
| `docupilot_list_folders` | read | List folders |
| `docupilot_list_merge_history` | read | List merge history |
| `docupilot_usage_status` | meta | Usage status (free-tier meter) |
| `docupilot_request_feature` | meta | Request a missing feature |
| `docupilot_upgrade` | meta | Upgrade to Pro or Pro+ |
| `docupilot_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `docupilot_upgrade` (it returns a Stripe Checkout link). Cancel any time with `docupilot_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `docupilot_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
