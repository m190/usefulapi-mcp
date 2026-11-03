# AssetTiger MCP by usefulapi

Use your [AssetTiger](https://www.assettiger.com) account from Claude, Cursor, or any MCP client. Finds assets, people, sites and inventory, reads asset events and history, creates assets, and checks assets out and in. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://assettiger.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://assettiger.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http assettiger https://assettiger.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=assettiger&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fassettiger.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "assettiger": {
      "url": "https://assettiger.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AssetTiger credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/assettiger/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **AssetTiger API token** and **AssetTiger auth token** (Settings → API Configuration; each token has at least 32 characters). The server validates it and stores it per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `assettiger_list_assets` | read | List assets |
| `assettiger_get_asset` | read | Get an asset |
| `assettiger_get_asset_events` | read | List an asset's events |
| `assettiger_get_asset_history` | read | Get an asset's history |
| `assettiger_list_sites` | read | List sites |
| `assettiger_list_locations` | read | List locations in a site |
| `assettiger_list_categories` | read | List categories |
| `assettiger_list_persons` | read | List persons |
| `assettiger_list_customers` | read | List customers |
| `assettiger_list_departments` | read | List departments |
| `assettiger_list_maintenances` | read | List maintenance records |
| `assettiger_list_contracts` | read | List contracts |
| `assettiger_list_inventories` | read | List inventory items |
| `assettiger_get_inventory_stock_summary` | read | Get an inventory item's stock summary |
| `assettiger_create_asset` | **write** | Create an asset |
| `assettiger_check_out_asset` | **write** | Check out an asset |
| `assettiger_check_in_asset` | **write** | Check in an asset |
| `assettiger_usage_status` | meta | Usage status (free-tier meter) |
| `assettiger_request_feature` | meta | Request a missing feature |
| `assettiger_upgrade` | meta | Upgrade to Pro or Pro+ |
| `assettiger_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `assettiger_upgrade` (it returns a Stripe Checkout link). Cancel any time with `assettiger_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `assettiger_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
