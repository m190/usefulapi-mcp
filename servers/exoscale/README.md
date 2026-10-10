# Exoscale MCP by usefulapi

Use [Exoscale](https://www.exoscale.com) from Claude, Cursor, or any MCP client — instances, templates, security groups, IPs, volumes, SKS clusters, DNS, quotas and usage.
Hosted, no local install: connect with your own Exoscale credentials.

**Live endpoint:** `https://exoscale.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/exoscale

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://exoscale.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http exoscale https://exoscale.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=exoscale&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fexoscale.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "exoscale": {
      "url": "https://exoscale.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Exoscale credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/exoscale/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `exoscale_list_zones` | read | List zones |
| `exoscale_get_organization` | read | Get organization |
| `exoscale_list_quotas` | read | List quotas |
| `exoscale_get_quota` | read | Get quota |
| `exoscale_get_usage_report` | read | Get usage report |
| `exoscale_list_instances` | read | List compute instances |
| `exoscale_get_instance` | read | Get compute instance |
| `exoscale_start_instance` | **write** | Start compute instance |
| `exoscale_stop_instance` | **write** | Stop compute instance |
| `exoscale_reboot_instance` | **write** | Reboot compute instance |
| `exoscale_get_operation` | read | Get operation |
| `exoscale_list_instance_types` | read | List instance types |
| `exoscale_get_instance_type` | read | Get instance type |
| `exoscale_list_templates` | read | List templates |
| `exoscale_get_template` | read | Get template |
| `exoscale_list_security_groups` | read | List security groups |
| `exoscale_get_security_group` | read | Get security group |
| `exoscale_list_elastic_ips` | read | List elastic IPs |
| `exoscale_get_elastic_ip` | read | Get elastic IP |
| `exoscale_list_block_storage_volumes` | read | List block storage volumes |
| `exoscale_get_block_storage_volume` | read | Get block storage volume |
| `exoscale_list_sks_clusters` | read | List SKS clusters |
| `exoscale_get_sks_cluster` | read | Get SKS cluster |
| `exoscale_list_dns_domains` | read | List DNS domains |
| `exoscale_get_dns_domain` | read | Get DNS domain |
| `exoscale_list_dns_records` | read | List DNS records |
| `exoscale_usage_status` | meta | Usage status (free-tier meter) |
| `exoscale_request_feature` | meta | Request a missing feature |
| `exoscale_upgrade` | meta | Upgrade to Pro (unlimited) |
| `exoscale_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `exoscale_upgrade` (it returns a Stripe Checkout link). Cancel any time with `exoscale_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `exoscale_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Exoscale.
