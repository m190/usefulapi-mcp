# RxNorm MCP by usefulapi

Look up drug names, RxCUIs, ingredients and interactions in RxNorm. Hosted, no local install.

**Live endpoint:** `https://rxnorm.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "rxnorm": {
      "url": "https://rxnorm.usefulapi.io/mcp"
    }
  }
}
```

This server needs **no credential** — RxNorm is a public data source. On first
connect you approve the link, and your usage is metered to a private id.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rxnorm_find_rxcui_by_name` | read | Find RxCUI by name |
| `rxnorm_get_drugs` | read | Search drugs by name |
| `rxnorm_get_concept_properties` | read | Get concept properties |
| `rxnorm_get_related_by_type` | read | Get related concepts by type |
| `rxnorm_get_all_related` | read | Get all related concepts |
| `rxnorm_get_ndcs` | read | Get NDCs for a concept |
| `rxnorm_get_history_status` | read | Get concept history / status |
| `rxnorm_get_property` | read | Get concept property |
| `rxnorm_get_spelling_suggestions` | read | Get spelling suggestions |
| `rxnorm_get_approximate_match` | read | Approximate term match |
| `rxnorm_get_term_types` | read | List term types |
| `rxnorm_get_drug_classes` | read | Get drug classes for a drug |
| `rxnorm_get_class_members` | read | Get drug class members |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

## License

MIT
