# EZRentOut MCP by usefulapi

Connect your API-enabled EZRentOut company.

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://ezrentout.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http ezrentout https://ezrentout.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=ezrentout&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fezrentout.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "ezrentout": {
      "url": "https://ezrentout.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your EZRentOut credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/ezrentout/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `ezrentout_list_orders` | read | List orders |
| `ezrentout_get_order` | read | Get an order |
| `ezrentout_get_order_history` | read | Get an order's in/out history |
| `ezrentout_list_payment_options` | read | List payment options |
| `ezrentout_list_coupons` | read | List coupons |
| `ezrentout_list_customers` | read | List or filter customers |
| `ezrentout_get_customer` | read | Get a customer |
| `ezrentout_search_member_by_email` | read | Find a customer or contact by email |
| `ezrentout_list_businesses` | read | List or filter businesses |
| `ezrentout_get_business` | read | Get a business |
| `ezrentout_list_business_contacts` | read | List business contacts |
| `ezrentout_get_business_contact` | read | Get a business contact |
| `ezrentout_list_customer_addresses` | read | List a customer's addresses |
| `ezrentout_list_business_addresses` | read | List a business's addresses |
| `ezrentout_list_assets` | read | List assets |
| `ezrentout_filter_assets` | read | Filter assets by status |
| `ezrentout_search_assets` | read | Search assets |
| `ezrentout_get_asset` | read | Get an asset |
| `ezrentout_get_asset_history` | read | Get an asset's history |
| `ezrentout_get_asset_booked_dates` | read | Get an item's booked dates |
| `ezrentout_list_asset_comments` | read | List an asset's comments |
| `ezrentout_list_assets_in_service` | read | List assets in service |
| `ezrentout_list_inventory` | read | List inventory items |
| `ezrentout_get_inventory_item` | read | Get an inventory item |
| `ezrentout_search_inventory` | read | Search inventory |
| `ezrentout_get_inventory_history` | read | Get an inventory item's stock history |
| `ezrentout_get_quantity_by_location` | read | Get an item's quantity at a location |
| `ezrentout_list_asset_stock` | read | List asset stock items |
| `ezrentout_get_asset_stock` | read | Get an asset stock item |
| `ezrentout_list_users` | read | List users |
| `ezrentout_get_user` | read | Get a user |
| `ezrentout_get_user_checked_out_items` | read | Get the items checked out to a user |
| `ezrentout_list_locations` | read | List locations |
| `ezrentout_get_location` | read | Get a location |
| `ezrentout_get_location_quantities` | read | Get the stock at a location |
| `ezrentout_list_groups` | read | List groups |
| `ezrentout_list_subgroups` | read | List subgroups |
| `ezrentout_list_bundles` | read | List bundles |
| `ezrentout_get_bundle` | read | Get a bundle |
| `ezrentout_list_vendors` | read | List vendors |
| `ezrentout_list_custom_fields` | read | List custom fields |
| `ezrentout_list_purchase_orders` | read | List purchase orders |
| `ezrentout_get_purchase_order` | read | Get a purchase order |
| `ezrentout_list_work_orders` | read | List work orders |
| `ezrentout_get_work_order` | read | Get a work order |
| `ezrentout_list_work_order_types` | read | List work order types |
| `ezrentout_list_custom_reports` | read | List saved reports |
| `ezrentout_create_customer` | **write** | Create a customer |
| `ezrentout_create_order` | **write** | Create an order |
| `ezrentout_add_assets_to_order` | **write** | Add assets to an order |
| `ezrentout_book_order` | **write** | Book an order |
| `ezrentout_add_order_custom_entry` | **write** | Add a custom charge to an order |
| `ezrentout_record_order_payment` | **write** | Record a payment on an order |
| `ezrentout_rent_out_order` | **write** | Rent out an order (check out) |
| `ezrentout_return_order` | **write** | Return an order (check in) |
| `ezrentout_add_asset_comment` | **write** | Add a comment to an item |
| `ezrentout_create_work_order` | **write** | Create a maintenance work order |
| `ezrentout_start_work_order` | **write** | Start a work order |
| `ezrentout_complete_work_order` | **write** | Complete a work order |
| `ezrentout_usage_status` | meta | Usage status (free-tier meter) |
| `ezrentout_request_feature` | meta | Request a missing feature |
| `ezrentout_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `ezrentout_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per company API token) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `ezrentout_upgrade` (it returns a Stripe Checkout link). Cancel any time with `ezrentout_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `ezrentout_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT
