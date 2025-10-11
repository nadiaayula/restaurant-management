import orderApi from '@/apiRequests/order'
import { GetOrdersQueryParamsType, UpdateOrderBodyType } from '@/schemas/order.schema'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useUpdateOrderMutation = () => {
  return useMutation({
    mutationFn: ({ orderId, ...body }: UpdateOrderBodyType & { orderId: number }) =>
      orderApi.updateOrder(orderId, body),
  })
}

export const useGetOrderListQuery = (queryParams: GetOrdersQueryParamsType) => {
  return useQuery({
    queryKey: ['orders', queryParams],
    queryFn: () => orderApi.getOrderList(queryParams),
  })
}

export const useGetOrderDetailQuery = (id: number, enabled: boolean) => {
  return useQuery({
    queryKey: ['orders', id],
    queryFn: () => orderApi.getOrderDetail(id),
    enabled,
  })
}
