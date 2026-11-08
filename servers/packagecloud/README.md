# packagecloud MCP by usefulapi

Use [packagecloud](https://packagecloud.io) from Claude, Cursor, or any MCP client — repositories, distributions, packages and versions, search, download and install statistics, GPG keys and READMEs, plus creating repositories, editing READMEs, promoting and deleting packages (delete needs the file name confirmed).
Hosted, no local install: connect with your own packagecloud credentials.

**Live endpoint:** `https://packagecloud.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/packagecloud

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://packagecloud.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http packagecloud https://packagecloud.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=packagecloud&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fpackagecloud.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "packagecloud": {
      "url": "https://packagecloud.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your packagecloud credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/packagecloud/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `packagecloud_list_repositories` | read | List repositories |
| `packagecloud_get_repository` | read | Get repository |
| `packagecloud_create_repository` | **write** | Create repository |
| `packagecloud_list_distributions` | read | List distributions |
| `packagecloud_list_packages` | read | List all packages |
| `packagecloud_search_packages` | read | Search packages |
| `packagecloud_list_package_groups` | read | List package names by type |
| `packagecloud_get_package` | read | Get package |
| `packagecloud_list_package_versions` | read | List package versions |
| `packagecloud_get_package_downloads` | read | Get package download stats |
| `packagecloud_get_repository_installs` | read | Get repository install stats |
| `packagecloud_list_gpg_keys` | read | List GPG keys |
| `packagecloud_get_gpg_key` | read | Get GPG key |
| `packagecloud_get_readme` | read | Get repository README |
| `packagecloud_create_readme` | **write** | Create repository README |
| `packagecloud_append_readme` | **write** | Append to repository README |
| `packagecloud_promote_package` | **write** | Promote (move) package |
| `packagecloud_delete_package` | **write** | Delete (yank) package |
| `packagecloud_usage_status` | meta | Usage status (free-tier meter) |
| `packagecloud_request_feature` | meta | Request a missing feature |
| `packagecloud_upgrade` | meta | Upgrade to Pro or Pro+ |
| `packagecloud_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per account) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `packagecloud_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `packagecloud_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `packagecloud_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by packagecloud.
