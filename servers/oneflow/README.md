# Oneflow MCP by usefulapi

Use your [Oneflow](https://www.oneflow.com) account from Claude, Cursor, or any MCP client. Read contracts, parties, data fields and files, and create draft contracts and comments. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://oneflow.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://oneflow.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http oneflow https://oneflow.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=oneflow&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Foneflow.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "oneflow": {
      "url": "https://oneflow.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Oneflow credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/oneflow/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **Oneflow API token** (Marketplace → API tokens in Oneflow) and, optionally, an **acting user email**. The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `oneflow_get_account` | read | Get account information |
| `oneflow_list_users` | read | List users |
| `oneflow_list_workspaces` | read | List workspaces |
| `oneflow_list_folders` | read | List folders |
| `oneflow_list_templates` | read | List templates |
| `oneflow_list_tags` | read | List tags |
| `oneflow_list_contracts` | read | List contracts |
| `oneflow_get_contract` | read | Get a contract |
| `oneflow_list_contract_parties` | read | List contract parties |
| `oneflow_get_contract_participant` | read | Get a contract participant |
| `oneflow_list_contract_data_fields` | read | List contract data fields |
| `oneflow_list_contract_files` | read | List contract files |
| `oneflow_list_contract_comments` | read | List contract comments |
| `oneflow_create_contract` | **write** | Create a draft contract |
| `oneflow_update_contract_data_fields` | **write** | Update contract data fields |
| `oneflow_create_contract_comment` | **write** | Add a contract comment |
| `oneflow_usage_status` | meta | Usage status (free-tier meter) |
| `oneflow_request_feature` | meta | Request a missing feature |
| `oneflow_upgrade` | meta | Upgrade to Pro or Pro+ |
| `oneflow_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `oneflow_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `oneflow_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `oneflow_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
