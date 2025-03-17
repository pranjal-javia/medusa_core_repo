/**
 * @schema StoreProductType
 * type: object
 * description: The product type's details.
 * x-schemaName: StoreProductType
 * required:
 *   - id
 *   - value
 *   - created_at
 *   - updated_at
 * properties:
 *   id:
 *     type: string
 *     title: id
 *     description: The product type's ID.
 *   metadata:
 *     type: object
 *     description: The product type's metadata, can hold custom key-value pairs.
 *   created_at:
 *     type: string
 *     format: date-time
 *     title: created_at
 *     description: The date the product type was created.
 *   updated_at:
 *     type: string
 *     format: date-time
 *     title: updated_at
 *     description: The date the product type was updated.
 *   deleted_at:
 *     type: string
 *     format: date-time
 *     title: deleted_at
 *     description: The date the product type was deleted.
 *   value:
 *     type: string
 *     title: value
 *     description: The type's value.
 * 
*/

