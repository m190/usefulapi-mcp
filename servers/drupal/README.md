# Drupal MCP by usefulapi

Read and write Drupal JSON:API nodes, taxonomy terms, users and files. Hosted, no local install.

**Live endpoint:** `https://drupal.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "drupal": {
      "url": "https://drupal.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll paste your **Drupal credentials**. They are validated, stored
per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `drupal_list_resource_types` | read | List resource types |
| `drupal_list_resources` | read | List resources |
| `drupal_get_resource` | read | Get resource |
| `drupal_search_content` | read | Search content |
| `drupal_create_resource` | **write** | Create resource |
| `drupal_update_resource` | **write** | Update resource |
| `drupal_delete_resource` | **write** | Delete resource |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
