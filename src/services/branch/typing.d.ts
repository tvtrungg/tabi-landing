type TListResponse<T> = {
  data: T[];
  total: number;
};

type TError = {
  code: number;
  type: string;
  message: string;
};

type TErrorResponse = {
  response: {
    data: {
      error: TError;
    };
  };
};

type TBranch = {
  id: number;
  name: string;
  district: string;
  province_city: string;
  min_price: number;
  max_price: number;
};

type TTypeBranch = {
  id: number;
  class: string;
  label_en: string;
  label_vi: string;
  desc_en: string;
  desc_vi: string;
  order: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

type TFacilityModel = {
  id: number;
  type: string;
  class_en: string;
  class_vi: string;
  name_en: string;
  name_vi: string;
};

type TBedType = {
  id: number;
  class: string;
  label_en: string;
  label_vi: string;
  desc_en: string;
  desc_vi: string;
  order: number;
};

type TBranchDetails = {
  id: number;
  branch_name: string;
  address: string;
  full_address: string;
  province_city: string;
  district: string;
  ward: string;
  latitude: string;
  longitude: string;
  description: string;
  reception_area: boolean;
  main_facilities: TFacilityModel[];
  type: TTypeBranch;
  // is_active: boolean;
  // branch_manager: TBranchManager;
  // room_types: TRoomTypes[];
  // banks: TBank[];
};

type TRoomTypes = {
  id: number;
  type_name: string;
  check_in_time: timestamp;
  check_out_time: timestamp;
  include_breakfast: boolean;
  facilities: TFacilityModel[];
};

type TRoomOfBranch = {
  id: number;
  room_name: string;
  max_occupancy: number;
  width: number;
  length: number;
  max_price: number;
  current_price: number;
  online_method_reduction: number;
  on_cash_method_reduction: number;
  remaining_quantity: number;
  room_type: TRoomTypes[];
  bed_type: TBedType[];
};
