# Asset Panda MCP by usefulapi

Use your [Asset Panda](https://www.assetpanda.com) account from Claude, Cursor, or any MCP client. Read and search asset records, collections and columns, and create or update records. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://asset-panda.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://asset-panda.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http asset-panda https://asset-panda.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=asset-panda&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fasset-panda.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "asset-panda": {
      "url": "https://asset-panda.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Asset Panda credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/asset-panda/

<!-- connect:end (generated above, edit below) -->

On first connect you provide an **Access Key ID** and an **Access Key Secret** (Asset Panda → Settings → API Configuration → Create New API Key). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `asset_panda_list_accounts` | read | List accounts |
| `asset_panda_get_account` | read | Get account |
| `asset_panda_list_modules` | read | List modules |
| `asset_panda_get_module` | read | Get module |
| `asset_panda_list_collections` | read | List collections |
| `asset_panda_get_collection` | read | Get collection |
| `asset_panda_list_collection_columns` | read | List collection columns |
| `asset_panda_list_categories` | read | List categories |
| `asset_panda_get_record` | read | Get record |
| `asset_panda_search_records` | read | Search records |
| `asset_panda_create_records` | **write** | Create records |
| `asset_panda_update_records` | **write** | Update records |
| `asset_panda_usage_status` | meta | Usage status (free-tier meter) |
| `asset_panda_request_feature` | meta | Request a missing feature |
| `asset_panda_upgrade` | meta | Upgrade to Pro or Pro+ |
| `asset_panda_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `asset_panda_upgrade` (it returns a Stripe Checkout link). Cancel any time with `asset_panda_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `asset_panda_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
