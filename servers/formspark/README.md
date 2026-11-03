# Formspark MCP by usefulapi

Use your [Formspark](https://formspark.io) account from Claude, Cursor, or any MCP client. Read workspaces, forms and submissions, and create or update forms. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://formspark.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://formspark.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http formspark https://formspark.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=formspark&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fformspark.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "formspark": {
      "url": "https://formspark.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Formspark credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/formspark/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Formspark API token** (Formspark → Account → API tokens). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `formspark_whoami` | read | Describe the API token |
| `formspark_list_workspaces` | read | List workspaces |
| `formspark_list_forms` | read | List forms |
| `formspark_get_form` | read | Get a form |
| `formspark_list_form_submissions` | read | List a form's submissions |
| `formspark_list_workspace_submissions` | read | List a workspace's submissions |
| `formspark_create_form` | **write** | Create a form |
| `formspark_update_form` | **write** | Update a form |
| `formspark_usage_status` | meta | Usage status (free-tier meter) |
| `formspark_request_feature` | meta | Request a missing feature |
| `formspark_upgrade` | meta | Upgrade to Pro or Pro+ |
| `formspark_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `formspark_upgrade` (it returns a Stripe Checkout link). Cancel any time with `formspark_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `formspark_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
