# Basis Theory MCP by usefulapi

Read token metadata, applications, audit logs, proxies and usage in the PCI vault. Hosted, no local install.

**Live endpoint:** `https://basis-theory.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "basis-theory": {
      "url": "https://basis-theory.usefulapi.io/mcp"
    }
  }
}
```

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

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
