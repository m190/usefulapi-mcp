# Cloudflare MCP by usefulapi

Use your [Cloudflare](https://www.cloudflare.com) account from Claude, Cursor, or any MCP client. Read zones, DNS records, Workers, storage and audit logs, and change DNS records or purge the cache. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://cloudflare.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://cloudflare.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http cloudflare https://cloudflare.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=cloudflare&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcloudflare.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "cloudflare": {
      "url": "https://cloudflare.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Cloudflare credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/cloudflare/

<!-- connect:end (generated above, edit below) -->

On first connect you provide a **Cloudflare API token** (My Profile → API Tokens in the Cloudflare dashboard).

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `cloudflare_verify_token` | read | Verify the API token |
| `cloudflare_list_accounts` | read | List accounts |
| `cloudflare_list_account_members` | read | List account members |
| `cloudflare_list_audit_logs` | read | List audit logs |
| `cloudflare_list_zones` | read | List zones |
| `cloudflare_get_zone` | read | Get a zone |
| `cloudflare_list_dns_records` | read | List DNS records |
| `cloudflare_get_dns_record` | read | Get a DNS record |
| `cloudflare_list_workers` | read | List Workers |
| `cloudflare_list_kv_namespaces` | read | List KV namespaces |
| `cloudflare_list_kv_keys` | read | List KV keys |
| `cloudflare_list_d1_databases` | read | List D1 databases |
| `cloudflare_list_r2_buckets` | read | List R2 buckets |
| `cloudflare_list_pages_projects` | read | List Pages projects |
| `cloudflare_list_tunnels` | read | List Tunnels |
| `cloudflare_list_access_apps` | read | List Access applications |
| `cloudflare_list_queues` | read | List Queues |
| `cloudflare_create_dns_record` | **write** | Create a DNS record |
| `cloudflare_update_dns_record` | **write** | Update a DNS record |
| `cloudflare_purge_cache` | **write** | Purge the cache |
| `cloudflare_usage_status` | meta | Usage status (free-tier meter) |
| `cloudflare_request_feature` | meta | Request a missing feature |
| `cloudflare_upgrade` | meta | Upgrade to Pro or Pro+ |
| `cloudflare_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `cloudflare_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `cloudflare_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `cloudflare_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
