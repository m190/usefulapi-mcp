# Basis Theory MCP by usefulapi

Read token metadata, applications, audit logs, proxies and usage in the PCI vault. Hosted, no local install.

**Live endpoint:** `https://basis-theory.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://basis-theory.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http basis-theory https://basis-theory.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=basis-theory&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fbasis-theory.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "basis-theory": {
      "url": "https://basis-theory.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/basis-theory/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Basis Theory credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `basis_theory_list_tokens` | read | List tokens |
| `basis_theory_search_tokens` | read | Search tokens |
| `basis_theory_get_token` | read | Get one token |
| `basis_theory_list_applications` | read | List applications |
| `basis_theory_get_application` | read | Get one application |
| `basis_theory_whoami` | read | Identify the configured key |
| `basis_theory_list_logs` | read | List audit logs |
| `basis_theory_list_log_entity_types` | read | List log entity types |
| `basis_theory_list_proxies` | read | List proxies |
| `basis_theory_get_proxy` | read | Get one proxy |
| `basis_theory_list_reactors` | read | List reactors |
| `basis_theory_get_reactor` | read | Get one reactor |
| `basis_theory_list_permissions` | read | List permissions |
| `basis_theory_list_roles` | read | List roles |
| `basis_theory_get_tenant` | read | Get the tenant |
| `basis_theory_get_tenant_usage` | read | Get the tenant usage report |
| `basis_theory_list_tenant_members` | read | List tenant members |
| `basis_theory_usage_status` | meta | Usage status (free-tier meter) |
| `basis_theory_upgrade` | meta | Upgrade to Pro (unlimited) |
| `basis_theory_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `basis_theory_upgrade` (it returns a Stripe Checkout link). Cancel any time with `basis_theory_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `basis_theory_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
