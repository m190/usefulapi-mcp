# Street.co.uk MCP by usefulapi

**Live endpoint:** `https://street-co-uk.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/street-co-uk

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://street-co-uk.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http street-co-uk https://street-co-uk.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=street-co-uk&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fstreet-co-uk.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "street-co-uk": {
      "url": "https://street-co-uk.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Street.co.uk credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/street-co-uk/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `street_list_properties` | read | List properties |
| `street_get_property` | read | Get property |
| `street_list_people` | read | List people |
| `street_get_person` | read | Get person |
| `street_list_vendors` | read | List vendors |
| `street_get_vendor` | read | Get vendor |
| `street_list_landlords` | read | List landlords |
| `street_get_landlord` | read | Get landlord |
| `street_list_tenants` | read | List tenants |
| `street_get_tenant` | read | Get tenant |
| `street_list_sales_applicants` | read | List sales applicants |
| `street_get_sales_applicant` | read | Get sales applicant |
| `street_list_lettings_applicants` | read | List lettings applicants |
| `street_get_lettings_applicant` | read | Get lettings applicant |
| `street_list_enquiries` | read | List enquiries |
| `street_get_enquiry` | read | Get enquiry |
| `street_list_viewings` | read | List viewings |
| `street_get_viewing` | read | Get viewing |
| `street_list_valuations` | read | List valuations |
| `street_get_valuation` | read | Get valuation |
| `street_list_sales` | read | List sales |
| `street_get_sale` | read | Get sale |
| `street_list_sales_offers` | read | List sales offers |
| `street_get_sales_offer` | read | Get sales offer |
| `street_list_lettings_offers` | read | List lettings offers |
| `street_get_lettings_offer` | read | Get lettings offer |
| `street_list_tenancies` | read | List tenancies |
| `street_get_tenancy` | read | Get tenancy |
| `street_list_maintenance_jobs` | read | List maintenance jobs |
| `street_get_maintenance_job` | read | Get maintenance job |
| `street_list_tasks` | read | List tasks |
| `street_list_follow_ups` | read | List follow ups |
| `street_list_branches` | read | List branches |
| `street_get_branch` | read | Get branch |
| `street_list_users` | read | List users |
| `street_get_user` | read | Get user |
| `street_list_invoices` | read | List invoices |
| `street_get_invoice` | read | Get invoice |
| `street_list_sales_instructions` | read | List sales instructions |
| `street_get_sales_instruction` | read | Get sales instruction |
| `street_list_lettings_instructions` | read | List lettings instructions |
| `street_get_lettings_instruction` | read | Get lettings instruction |
| `street_list_inspections` | read | List inspections |
| `street_get_inspection` | read | Get inspection |
| `street_list_interested_applicants` | read | List interested applicants |
| `street_get_interested_applicant` | read | Get interested applicant |
| `street_list_task_types` | read | List task types |
| `street_list_areas` | read | List areas |
| `street_create_enquiry` | **write** | Create enquiry |
| `street_create_note` | **write** | Create note |
| `street_create_task` | **write** | Create task |
| `street_create_follow_up` | **write** | Create follow-up |
| `street_create_maintenance_request` | **write** | Create maintenance request |
| `street_update_person` | **write** | Update person |
| `street_usage_status` | meta | Usage status (free-tier meter) |
| `street_request_feature` | meta | Request a missing feature |
| `street_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `street_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per account) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `street_upgrade` (it returns a Stripe Checkout link). Cancel any time with `street_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `street_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License
