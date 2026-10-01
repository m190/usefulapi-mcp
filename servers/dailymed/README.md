# DailyMed MCP by usefulapi

Search DailyMed drug labels, SPLs, NDCs and packaging. Hosted, no local install.

**Live endpoint:** `https://dailymed.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Add to Claude

```json
{
  "mcpServers": {
    "dailymed": {
      "url": "https://dailymed.usefulapi.io/mcp"
    }
  }
}
```

This server needs **no credential** — DailyMed is a public data source. On first
connect you log in with your email: we send a 6-digit code from `login@usefulapi.io`. The address
is used only to send the code; we keep a one-way hash of it as your account id, so your free calls
and your plan stay yours.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `dailymed_search_labels` | read | Search FDA drug labels (SPLs) |
| `dailymed_get_label` | read | Get full SPL label document (XML) |
| `dailymed_label_history` | read | Get label version history |
| `dailymed_label_ndcs` | read | Get NDC codes for a label |
| `dailymed_label_media` | read | Get label media (images) |
| `dailymed_label_packaging` | read | Get label packaging & ingredients |
| `dailymed_list_drug_names` | read | List / search drug names |
| `dailymed_list_ndcs` | read | List all NDC codes |
| `dailymed_list_rxcuis` | read | List product-level RxCUIs |
| `dailymed_list_uniis` | read | List UNII active moieties |
| `dailymed_list_drug_classes` | read | List drug classes |
| `dailymed_list_application_numbers` | read | List FDA application numbers |
| `dailymed_usage_status` | meta | Usage status (free-tier meter) |
| `dailymed_upgrade` | meta | Upgrade to Pro (unlimited) |
| `dailymed_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `dailymed_upgrade` (it returns a Stripe Checkout link). Cancel any time with `dailymed_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `dailymed_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
