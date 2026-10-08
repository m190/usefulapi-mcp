# Nomic Atlas MCP by usefulapi

Semantic nearest-neighbour search over your datasets, plus indices and projections. Hosted, no local install.

**Live endpoint:** `https://nomic-atlas.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://nomic-atlas.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http nomic-atlas https://nomic-atlas.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=nomic-atlas&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fnomic-atlas.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "nomic-atlas": {
      "url": "https://nomic-atlas.usefulapi.io/mcp"
    }
  }
}
```

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/nomic-atlas/

<!-- connect:end (generated above, edit below) -->

On first connect you'll paste your **Nomic Atlas credentials**. They are validated,
stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `nomic_get_user` | read | Get the current user |
| `nomic_get_organization` | read | Get an organisation |
| `nomic_get_dataset` | read | Get a dataset by id |
| `nomic_get_dataset_by_slug` | read | Get a dataset by name |
| `nomic_nearest_neighbors_by_id` | read | Find similar records |
| `nomic_get_index_job` | read | Get an index job |
| `nomic_get_projection_schema` | read | Get a projection's schema |
| `nomic_list_tags` | read | List a projection's tags |
| `nomic_get_tag_status` | read | Get a tag's status |
| `nomic_atlas_usage_status` | meta | Usage status (free-tier meter) |
| `nomic_atlas_upgrade` | meta | Upgrade to Pro (unlimited) |
| `nomic_atlas_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `nomic_atlas_upgrade` (it returns a Stripe Checkout link). Cancel any time with `nomic_atlas_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `nomic_atlas_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
